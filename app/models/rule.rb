class Rule < ActiveRecord::Base
  belongs_to :source_host, :class_name => "Host", :foreign_key => "source_host_id"
  belongs_to :target_host, :class_name => "Host", :foreign_key => "target_host_id"
end
