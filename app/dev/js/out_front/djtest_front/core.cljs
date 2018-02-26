(ns djtest-front.core
  (:require  [reagent.core :as reagent :refer [atom]]
             [re-frame.core :as re-frame]
             [djtest.events :as events]
             [djtest.views :as views]
             [djtest.config :as config]))

(defonce state (atom {:message "Hello Reagent world"}))

(defn root-component []
  [:h1 (:message @state)
   [:p "with figwheel!"]])

(defn mount-root [setting]
  (re-frame/clear-subscription-cache!)
  (reagent/render [views/main-panel]
                  (.getElementById js/document "app")))

(defn init! [setting]
  (mount-root setting))
