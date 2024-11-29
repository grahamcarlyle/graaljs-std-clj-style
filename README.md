# graaljs-std-clj-style

## Why?

[Standard Clojure Style](https://github.com/oakmac/standard-clojure-style-js) is "a JavaScript library to format Clojure code according to Standard Clojure Style."

However, it's not yet implemented in a JVM language so this is a proof of concept hack to run standard-clojure-style from the JVM using graaljs.

Currently just a bare wrapper around the format function, and so lacks all the nice cli features.

Inspired by https://github.com/bowbahdoe/mjml which similarly wraps the MJML npm library.

## Usage

```shell
$ mvn install ; not on maven so from a local install
$ clj -Sdeps '{:deps {com.grahamcarlyle/graaljs-std-clj-style {:mvn/version "2024.11.29.1"}}}'
Clojure 1.12.0
user=> (def code "(ns my.company.core (:require [clojure.string :as str]))")
#'user/code
user=> (import com.grahamcarlyle.stdcljstyle.StandardCljStyle)
com.grahamcarlyle.stdcljstyle.StandardCljStyle
user=> (println (-> (StandardCljStyle/of code) (StandardCljStyle/.format)))
(ns my.company.core
  (:require
   [clojure.string :as str]))
nil
user=> 
```

 