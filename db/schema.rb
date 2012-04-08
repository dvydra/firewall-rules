# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20110930110150) do

  create_table "hosts", :force => true do |t|
    t.string   "name",       :limit => 80
    t.string   "location",   :limit => 200
    t.string   "hostname",   :limit => 200
    t.datetime "created_at",                :null => false
    t.datetime "updated_at",                :null => false
  end

  create_table "rules", :force => true do |t|
    t.integer  "source_host_id"
    t.integer  "target_host_id"
    t.string   "source_port"
    t.string   "target_port"
    t.datetime "created_at",     :null => false
    t.datetime "updated_at",     :null => false
  end

end
