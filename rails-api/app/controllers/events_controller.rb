class EventsController < ApplicationController
  def index
    load_events
  end

private

  def event_scope
    Event.all
  end
  
  def load_events
    @events = event_scope.order(event_date: :DESC)
  end
end