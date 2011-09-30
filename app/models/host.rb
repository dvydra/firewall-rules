class Host < ActiveRecord::Base
  has_many :rules, :foreign_key => "source_host_id"
end