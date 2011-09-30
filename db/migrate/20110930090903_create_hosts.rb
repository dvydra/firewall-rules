class CreateHosts < ActiveRecord::Migration
  def change
    create_table :hosts do |t|
      t.string :name, :limit => 80
      t.string :location, :limit => 200
      t.string :hostname, :limit => 200
      t.timestamps
    end
  end
end
