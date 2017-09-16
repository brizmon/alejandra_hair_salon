class AppointmentsController < ApplicationController
    def index 
        appointments = Appointment.all
        render json: { appointments: appointments.map(&:serializable_hash) }
    end

    def show 
        appointment = Appointment.find(params[:id])
        render json: { appointment: appointment }
    end 

    def create 
        puts "we are in the rb backend create"
        appointment = Appointment.new(appointment_params)
        if appointment.save
            render json: {
                message: 'ok',
                appointment: appointment,
            }
        else 
            render json: {message: 'Appointment not booked'}
        end
    end 

    def update 
        appointment = params['appointment']
        Appointment.update(params[:id],
                    service: appointment['service'],
                    appt_time: appointment['appt_time'],
                    hairstylist: appointment['hairstylist']
                    )
    end

    def destroy
        Appointment.destroy(params['id'])
    end

    private
    def appointment_params
        params.require(:appointment).permit(:service, :appt_time, :hairstylist)
    end 
end
