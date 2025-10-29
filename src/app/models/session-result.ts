export interface SessionResult {
  position: number;
  driver_number: number;
  number_of_laps: number;
  dnf: boolean;
  dns: boolean;
  dsq: boolean;
  gap_to_leader: number;
  duration: number;
  meeting_key: number;
  session_key: number;
}
