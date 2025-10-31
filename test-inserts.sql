SELECT * FROM public.users
SELECT * FROM public.vehicles

	--users
insert into users (first_name, second_name, last_name, second_last_name, position, email, phone, employee_number, birthdate) values
	('Edgar', 'Alejandro', 'Garcia', 'Martinez', '04', 'jorge.romo.18e@utzmg.edu.mx', '3327422108', '9234', '10-09-1998');

	--Type to Vehicle

insert into type_to_vehicle (type, image, operative, in_operative) values 
	('Rapida', 'https://res.cloudinary.com/dytw0yx6j/image/upload/v1758905360/rapida_qnigci.png', 0, 0),
	('Motobomba', 'https://res.cloudinary.com/dytw0yx6j/image/upload/v1758905359/motobomba_o0xihx.png', 0, 0),
	('Escala', 'https://res.cloudinary.com/dytw0yx6j/image/upload/v1758905360/escala_xv2aft.png', 0, 0),
	('Pipa-Motobomba', 'https://res.cloudinary.com/dytw0yx6j/image/upload/v1758905360/pipa-motobomba_l4swzr.png', 0, 0),
	('Sedan', 'https://res.cloudinary.com/dytw0yx6j/image/upload/v1758905360/sedan_vxaqni.png', 0, 0);

	--vehicles
insert into vehicles (number_unit, type, cover_img, left_img, up_img, front_img, back_img, kilometers, kilometers_to_service, 
						date_register, vehicle_license_plates, status, model, card_brand) values
		(63, 'Rapida', 'https://res.cloudinary.com/dytw0yx6j/image/upload/v1758931768/u-63right_hiiw8u.png', 'https://res.cloudinary.com/dytw0yx6j/image/upload/v1758931768/u-63left_pkkfnk.png', 'https://res.cloudinary.com/dytw0yx6j/image/upload/v1758931768/u-63up_awcgtq.png', 'https://res.cloudinary.com/dytw0yx6j/image/upload/v1758931768/u-63front_nzrn6x.png', 'https://res.cloudinary.com/dytw0yx6j/image/upload/v1758931768/u-63back_wndy5n.png', 60000, 80000, current_date, 'JX-64-511', 'operativa', '2024', 'Ford: Super Duty'),
		(78, 'Rapida', 'https://res.cloudinary.com/dytw0yx6j/image/upload/v1758836489/u-78right_ilinbj.png', 'https://res.cloudinary.com/dytw0yx6j/image/upload/v1758836487/u-78left_iaziir.png', 'https://res.cloudinary.com/dytw0yx6j/image/upload/v1758836490/u-78up_vz7ajk.png', 'https://res.cloudinary.com/dytw0yx6j/image/upload/v1758836485/u-78front_ltccfi.png', 'https://res.cloudinary.com/dytw0yx6j/image/upload/v1758836484/u-78back_vfv1sv.png', 6000, 15000, current_date, 'JX-64-511', 'operativa', '2024', 'Ford: Super Duty'),	
		(37, 'Rapida', 'https://res.cloudinary.com/dytw0yx6j/image/upload/v1758836516/u-37right_gpxofd.png', 'https://res.cloudinary.com/dytw0yx6j/image/upload/v1758836514/u-37left_jw7hoy.png', 'https://res.cloudinary.com/dytw0yx6j/image/upload/v1758836518/u-37up_vpbrsn.png', 'https://res.cloudinary.com/dytw0yx6j/image/upload/v1758836513/u-37front_isxyc9.png', 'https://res.cloudinary.com/dytw0yx6j/image/upload/v1758836511/u-37back_s81lco.png',  38000, 40000, current_date, '#########', 'taller', '2014', 'Mitsubishy'),
		(67, 'Pipa-Motobomba', 'https://res.cloudinary.com/dytw0yx6j/image/upload/v1758836373/u-67right_gn3lqm.png', 'https://res.cloudinary.com/dytw0yx6j/image/upload/v1758836372/u-67left_dx3tan.png', 'https://res.cloudinary.com/dytw0yx6j/image/upload/v1758836374/u-67up_t35ueo.png', 'https://res.cloudinary.com/dytw0yx6j/image/upload/v1758836370/u-67front_nsk5qf.png', 'https://res.cloudinary.com/dytw0yx6j/image/upload/v1758836369/u-67back_v9jdu1.png',  100000, 120000, current_date, 'JK-25-367', 'operativa', '2017', 'International');


INSERT INTO vehicle_logs (
    vehicle_id, driver_id,
    Luz_Delantera_alta, Luz_Delantera_baja, Luces_de_emergencia, Luces_neblineros, Luz_direccional, Luz_de_freno, Luz_de_reversa, Luces_del_tanque_cisterna, Luces_interior_cabina,
    Motor_adicional, Estado_de_Tablero_Indicadores, Elevadores_de_cristales, Espejos_lateral_derecho, Espejos_lateral_izquierdo, Espejo_retrovisor, Cristal_Parabrisas, Cristal_medallon, Cristal_de_puertas,
    Gato_hidraulico, Herramientas_cambio_de_ruedas, Bocina_de_sonoros, Modulo_luminosos_sonoros, Torreta, Cinturones_de_seguridad, Limpia_parabrisas, Poliza_seguro, Tarjeta_circulacion,
    Tapon_tanque_combustible, Tapon_aceite, Tapon_agua, Nivel_aceite_motor, Nivel_aceite_transmision, Nivel_agua_radiador, Nivel_liquido_frenos,
    Llanta_delantera_derecha, Llanta_delantera_izquierda, Llanta_trasera_derecha, Llanta_trasera_izquierda, Llanta_repuesto,
    Llaves_encendido, Switch_encendido, Bateria, Postes_terminales_bateria
)
VALUES (
    1, 1,
    'Bueno','Bueno','Bueno','Bueno','Bueno','Bueno','Bueno','Bueno','Bueno',
    'Bueno','Bueno','Bueno','Bueno','Bueno','Bueno','Bueno','Bueno','Bueno',
    'Bueno','Bueno','Bueno','Bueno','Bueno','Bueno','Bueno','Bueno','Bueno',
    'Bueno','Bueno','Bueno','Bueno','Bueno','Bueno','Bueno',
    'Bueno','Bueno','Bueno','Bueno','Bueno',
    'Bueno','Bueno','Bueno','Bueno'
), 
(
    2, 1,
    'Bueno','Bueno','Bueno','Bueno','Bueno','Bueno','Bueno','Bueno','Bueno',
    'Bueno','Bueno','Bueno','Bueno','Bueno','Bueno','Bueno','Bueno','Bueno',
    'Bueno','Bueno','Bueno','Bueno','Bueno','Bueno','Bueno','Bueno','Bueno',
    'Bueno','Bueno','Bueno','Bueno','Bueno','Bueno','Bueno',
    'Bueno','Bueno','Bueno','Bueno','Bueno',
    'Bueno','Bueno','Bueno','Bueno'
),
(
    3, 1,
    'Bueno','Bueno','Bueno','Bueno','Bueno','Bueno','Bueno','Bueno','Bueno',
    'Bueno','Bueno','Bueno','Bueno','Bueno','Bueno','Bueno','Bueno','Bueno',
    'Bueno','Bueno','Bueno','Bueno','Bueno','Bueno','Bueno','Bueno','Bueno',
    'Bueno','Bueno','Bueno','Bueno','Bueno','Bueno','Bueno',
    'Bueno','Bueno','Bueno','Bueno','Bueno',
    'Bueno','Bueno','Bueno','Bueno'
),
(
	4, 1,
    'Bueno','Bueno','Bueno','Bueno','Bueno','Bueno','Bueno','Bueno','Bueno',
    'Bueno','Bueno','Bueno','Bueno','Bueno','Bueno','Bueno','Bueno','Bueno',
    'Bueno','Bueno','Bueno','Bueno','Bueno','Bueno','Bueno','Bueno','Bueno',
    'Bueno','Bueno','Bueno','Bueno','Bueno','Bueno','Bueno',
    'Bueno','Bueno','Bueno','Bueno','Bueno',
    'Bueno','Bueno','Bueno','Bueno'
), 
	(
    1, 1,
    'Malo','Bueno','Bueno','Bueno','Malo','Bueno','Bueno','Bueno','Bueno',
    'Bueno','Bueno','Malo','Bueno','Bueno','Bueno','Malo','Bueno','Bueno',
    'Bueno','Bueno','Bueno','Bueno','Bueno','Bueno','Bueno','Bueno','Bueno',
    'Bueno','Bueno','Bueno','Malo','Bueno','Bueno','Bueno',
    'Bueno','Malo','Bueno','Malo','Bueno',
    'Bueno','Bueno','Malo','Bueno'
);

INSERT INTO damages (
  driver_id, vehicle_id, damage_event, where_is_damage, photo_damage, damage_description, type_to_damage
) VALUES 
(
  1, 1, 'Girando se golpea un volardo', 'Frontal', 'https://heraldodemexico.com.mx/u/fotografias/m/2024/9/2/f414x232-1003384_1017123_5050.jpg', 'Golpe leve en la defensa frontal', 'Golpe'
),
(
  1, 2, 'Se estaciona la unidad y al regresar está rayada', 'L. Derecho', 'https://heraldodemexico.com.mx/u/fotografias/m/2024/9/2/f414x232-1003384_1017123_5050.jpg', 'Rayón superficial en la puerta del copiloto', 'Rayon'
),
(
  1, 3, 'No se percató del objeto al dar reversa', 'Trasero', 'https://heraldodemexico.com.mx/u/fotografias/m/2024/9/2/f414x232-1003384_1017123_5050.jpg', 'Raspadura visible en la cajuela', 'Raspadura'
),
(
  1, 1, 'Golpe en revisión', 'Frontal', 'https://heraldodemexico.com.mx/u/fotografias/m/2024/9/2/f414x232-1003384_1017123_5050.jpg', 'Golpe leve en la defensa frontal', 'Golpe'
),
(
  1, 2, 'Inspección inicial', 'L. Derecho', 'https://heraldodemexico.com.mx/u/fotografias/m/2024/9/2/f414x232-1003384_1017123_5050.jpg', 'Rayón superficial en la puerta del copiloto', 'Rayon'
),
(
  1, 3, 'Daño reportado por conductor', 'Trasero', 'https://heraldodemexico.com.mx/u/fotografias/m/2024/9/2/f414x232-1003384_1017123_5050.jpg', 'Raspadura visible en la cajuela', 'Raspadura'
);

