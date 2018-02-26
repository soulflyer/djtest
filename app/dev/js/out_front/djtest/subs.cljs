(ns djtest.subs
  (:require [re-frame.core :as rf]))

(rf/reg-sub
 ::name
 (fn [db]
   (:name db)))

(rf/reg-sub
  :time
  (fn [db _]     ;; db is current app state. 2nd unused param is query vector
    (:time db))) ;; return a query computation over the application state

(rf/reg-sub
  :time-colour
  (fn [db _]
    (:time-colour db)))

(rf/reg-sub
  :time-str
  (fn [_ _]
    (rf/subscribe [:time]))
  (fn [t _]
    (-> t
       .toTimeString
       (clojure.string/split " ")
       first)))

(rf/reg-sub
  :project-string
  (fn [db _]
    (:project-string db)))
