import { User_Booking } from './user_booking.model';

export interface Booking{
    rsv_id: number,
    rsv_fecha_solicitud: string,
    rsv_fecha_reserva_inicio: string,
    rsv_hora_fin: string,
    rsv_num_estudiantes: number,
    rsv_estado: string,
    rsv_detalles: string,
    rsv_program_id:number,
    rsv_faculty_id:number,
    rsv_incidencia_id: number | null,
    rsv_cls_id: number,
    rsv_usr:User_Booking
}