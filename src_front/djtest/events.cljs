(ns djtest.events
  (:require [re-frame.core :as rf]
            [djtest.db :as db]
            [ajax.core :as ajax]
            [day8.re-frame.http-fx]
            [re-frame.core :refer [reg-event-fx]]
            [djtest.config :as config]))

(rf/reg-event-db
 ::initialize-db
 (fn  [_ _]
   db/default-db))

(defn dispatch-timer-event
  []
  (let [now (js/Date.)]
    (rf/dispatch [:timer now])))

;; call the dispatching function every second
(defonce do-timer (js/setInterval dispatch-timer-event 1000))

(rf/reg-event-db                 ;; usage:  (rf/dispatch [:timer a-js-Date])
  :timer
  (fn [db [_ new-time]]          ;; <-- de-structure the event vector
    (assoc db :time new-time)))  ;; compute and return the new application state

(rf/reg-event-db
  :time-colour-change            ;; usage:  (rf/dispatch [:time-color-change 34562])
  (fn [db [_ new-colour-value]]
    (assoc db :time-colour new-colour-value)))   ;; compute and return the new application state

(rf/reg-event-db
  :process-response
  (fn
    [db [_ response]]           ;; destructure the response from the event vector
    (-> db
        (assoc :loading? false) ;; take away that "Loading ..." UI
        (assoc :project-string (js->clj response)))))  ;; fairly lame processing

(rf/reg-event-db
  :bad-response
  (fn
    [db [_ response]]
    (-> db
        (assoc :loading? false)
        (assoc :error "Project load failed")
        )))

(rf/reg-event-fx        ;; <-- note the `-fx` extension
  :request-it        ;; <-- the event id
  (fn                ;; <-- the handler function
    [{db :db} _]     ;; <-- 1st argument is coeffect, from which we extract db

    ;; we return a map of (side) effects
    {:http-xhrio {:method          :get
                  :cross-origin    true
                  :uri             (str config/api-root "/projects")
                  :format          (ajax/json-request-format)
                  :response-format (ajax/json-response-format {:keywords? true})
                  :on-success      [:process-response]
                  :on-failure      [:bad-response]}
     :db  (assoc db :loading? true)}))
