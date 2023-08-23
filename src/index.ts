import { CustomMap } from './CustomMap';
import { User } from './user';
import { Company } from './Company';

const customMap = new CustomMap('mapContainer');
const user = new User();
const company = new Company();
customMap.addMarker(user);
customMap.addMarker(company);
