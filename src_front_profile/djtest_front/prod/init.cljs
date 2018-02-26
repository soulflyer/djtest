(ns djtest.init
    (:require [djtest.core :as core]
              [djtest.conf :as conf]))

(enable-console-print!)

(defn start-descjop! []
  (core/init! conf/setting))

(start-descjop!)
