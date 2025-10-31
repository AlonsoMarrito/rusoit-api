create or replace function types_vehicles() returns trigger as $$
	declare 
	status_vehicle varchar;
	status_not_update varchar;
	begin 
	select into status_vehicle (status) from vehicles where id = new.id;

	if old.id is null then 
		if status_vehicle = 'operativa' then
			update type_to_vehicle set operative = operative+1 where type = new.type;
		else 
			update type_to_vehicle set in_operative = in_operative+1 where type = new.type;
		end if;
	else 
		if status_vehicle = 'operativa' then
			if new.status != old.status then
				update type_to_vehicle set operative = operative+1, in_operative = in_operative-1 where type = new.type;
			end if;
		else 
			if new.status != old.status then
				update type_to_vehicle set in_operative = in_operative+1, operative = operative-1 where type = new.type;
			end if;
		end if;
	end if;
		
return new;
end;
$$ language 'plpgsql';

create trigger types_vehicles
after insert or update on vehicles
for each row execute function types_vehicles();

delete from damages;
delete from vehicle_logs;
delete from type_to_vehicle;
delete from vehicles;

ALTER SEQUENCE type_to_vehicle_id_seq RESTART WITH 1;
ALTER SEQUENCE vehicles_id_seq RESTART WITH 1;
ALTER SEQUENCE vehicle_logs_id_seq RESTART WITH 1;
ALTER SEQUENCE damages_id_seq RESTART WITH 1;
