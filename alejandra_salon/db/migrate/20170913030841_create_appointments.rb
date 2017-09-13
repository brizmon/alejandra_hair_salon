class CreateAppointments < ActiveRecord::Migration[5.1]
  def change
    create_table :appointments do |t|
      t.string :service
      t.datetime :appt_time
      t.string :hairstylist

      t.timestamps
    end
  end
end
