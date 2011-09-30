class ReportsController < ApplicationController
  def show
    @hosts = Host.all
  end
end
