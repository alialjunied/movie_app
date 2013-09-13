class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.integer :score
      t.text :comment
      t.references :user, index: true
      t.references :movie, index: true
      t.datetime :update_at

      t.timestamps
    end
  end
end
