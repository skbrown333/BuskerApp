type Event = {
  _id: any;
  name: string;
  user: string;
  address: string;
  lat: number;
  lng: number;
  start_time: string;
  end_time: string;
  description: string;
}

export interface EventPinProps {
  event: Event;
  lat: number;
  lng: number;
  key: any;
}
