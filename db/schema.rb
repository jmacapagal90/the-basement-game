# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_08_16_135741) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "decisions", force: :cascade do |t|
    t.string "prompt"
    t.bigint "prev_decision_id"
    t.boolean "answer"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["prev_decision_id"], name: "index_decisions_on_prev_decision_id"
  end

  create_table "games", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "outcomes_id"
    t.index ["outcomes_id"], name: "index_games_on_outcomes_id"
  end

  create_table "outcomes", force: :cascade do |t|
    t.string "result"
    t.bigint "decision_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "summary"
    t.index ["decision_id"], name: "index_outcomes_on_decision_id"
  end

  create_table "players", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "email"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "scores", force: :cascade do |t|
    t.bigint "player_id"
    t.bigint "game_id"
    t.integer "points"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["game_id"], name: "index_scores_on_game_id"
    t.index ["player_id"], name: "index_scores_on_player_id"
  end

  add_foreign_key "decisions", "decisions", column: "prev_decision_id"
end
