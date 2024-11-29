package com.grahamcarlyle.stdcljstyle;

import org.graalvm.polyglot.Context;
import org.graalvm.polyglot.Engine;
import org.graalvm.polyglot.HostAccess;

import java.io.IOException;
import java.util.Objects;

public final class StandardCljStyle {
    private static final Object ENGINE_LOCK = new Object();
    private static Engine ENGINE = null;

    private static Engine getEngine() {
        synchronized (ENGINE_LOCK) {
            if (ENGINE == null) {
                ENGINE = Engine
                        .newBuilder("js")
                        .option("engine.WarnInterpreterOnly", "false")
                        .build();
            }
            return ENGINE;
        }
    }

    private static final String stdStyleJsSource;
    static  {
        try {
            stdStyleJsSource = "window={};" + "process={};" + new String(
                    Objects.requireNonNull(
                            StandardCljStyle.class.getResourceAsStream("/com/grahamcarlyle/std-clj-style/std-clj-style.js")
                    ).readAllBytes()
            );
        } catch (IOException e) {
            throw new ExceptionInInitializerError(e);
        }

    }
    private final String cljSource;

    private StandardCljStyle(String cljSource) {
        this.cljSource = cljSource;
    }

    public static StandardCljStyle of(String cljSource) {
        return new StandardCljStyle(cljSource);
    }

    public String format() {
        return format((Engine)null);
    }

    public String format(Engine engine) {
        var contextBuilder = Context.newBuilder()
                .allowHostAccess(HostAccess.NONE)
                //.logHandler(OutputStream.nullOutputStream())
                ;
        if (engine != null) {
            contextBuilder.engine(engine);
        }
        else {
            contextBuilder.engine(getEngine());
        }

        try (Context context = contextBuilder.build()) {
            var bindings = context.getBindings("js");
            bindings.putMember("code", cljSource);
            var result = context.eval("js", stdStyleJsSource);
            return result.getMember("out").asString();
        }
    }

    @Override
    public String toString() {
        return cljSource;
    }

    @Override
    public boolean equals(Object o) {
        return o instanceof StandardCljStyle mjml
                && Objects.equals(cljSource, mjml.cljSource);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(cljSource);
    }
}
