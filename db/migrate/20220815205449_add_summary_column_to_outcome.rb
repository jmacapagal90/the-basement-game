class AddSummaryColumnToOutcome < ActiveRecord::Migration[6.1]
  def change
    add_column :outcomes, :summary, :string
  end
end
