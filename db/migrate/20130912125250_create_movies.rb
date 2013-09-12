class CreateMovies < ActiveRecord::Migration
  def change
    create_table :movies do |t|
      t.string :summary
      t.string :title
      t.string :img_url
      t.string :user

      t.timestamps
    end
  end
end
