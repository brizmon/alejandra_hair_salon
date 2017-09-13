class AppointmentsController < ApplicationController
    def index 
        appointments = Appointment.all
        render json: { appointments: appointments.map(&:serialize) }
    end

    def show 
        appointment = Appointment.find(params[:id])
        render json: { appointment: appointment }
    end 

    def create 
        appointment = Appointment.new(appointment_params)
    end 

    private
    def appointment_params
        params.require(:appointment).permit(:service, :appt_time, :hairstylist)
    end 
end
