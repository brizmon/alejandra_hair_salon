# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Appointment.create(service: "color", appt_time: 2, hairstylist: "Alejandra")
Appointment.create(service: "color", appt_time: 3, hairstylist: "Otilia")
Appointment.create(service: "haircut", appt_time: 4, hairstylist: "Alejandra")
Appointment.create(service: "updo", appt_time: 5, hairstylist: "Camila")
Appointment.create(service: "makeup", appt_time: 6, hairstylist: "Gloria")

