class CreateRules < ActiveRecord::Migration
  def change
    create_table :rules do |t|
      t.integer :source_host_id
      t.integer :target_host_id
      t.string :source_port
      t.string :target_port
      t.timestamps
    end
  end
end
