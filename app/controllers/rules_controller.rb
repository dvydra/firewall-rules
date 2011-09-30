class RulesController < InheritedResources::Base
  respond_to :html

  def new
    new!
  end
end
