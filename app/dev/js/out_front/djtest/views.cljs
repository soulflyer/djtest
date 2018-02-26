(ns djtest.views
  (:require [re-frame.core :as rf]
            [re-com.core :as re-com]
            [djtest.subs :as subs]))

(defn title []
  (let [name (rf/subscribe [::subs/name])]
    [:h1 (str "Hello from " @name)]))

(defn clock
  []
  [:div.example-clock
   {:style {:color @(rf/subscribe [:time-colour])}}
   @(rf/subscribe [:time-str])])

(defn colour-input
  []
  [:div.colour-input
   "Time colour: "
   [:input {:type "text"
            :value @(rf/subscribe [:time-colour])        ;; subscribe
            :on-change #(rf/dispatch [:time-colour-change (-> % .-target .-value)])}]])

(defn request-it-button
  []
  [re-com/button
   :label "Fetch Projects"
   :on-click #(rf/dispatch [:request-it])])

(defn projects
  []
  [:div.projects
   @(rf/subscribe [:project-string])])

(defn ui
  []
  [:div
   [request-it-button]
   [projects]
   [clock]
   [colour-input]])

(defn main-panel []
  [re-com/v-box
   :height "100%"
   :children [[title]
              [ui]]])
