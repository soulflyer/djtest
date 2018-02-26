(ns djtest-front.init
  (:require [figwheel.client :as fw :include-macros true]
            [djtest.core :as core]
            [djtest.conf :as conf]))

(enable-console-print!)

(fw/watch-and-reload
 :websocket-url   "ws://localhost:3447/figwheel-ws"
 :jsload-callback 'start-descjop!)

(defn start-descjop! []
  (core/init! conf/setting))

(start-descjop!)
