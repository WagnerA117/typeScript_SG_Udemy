/// <reference types="@types/google.maps" />p
import { User } from "./User";
import { CustomMap } from "./CustomMap";
import { Company } from "./Company";

const company = new Company();
const user = new User();
const customMap = new CustomMap("map");

customMap.addMarker(user);

customMap.addMarker(company);
