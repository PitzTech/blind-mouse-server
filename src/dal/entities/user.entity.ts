import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class User {
  @PrimaryKey()
  _id!: string;

  @Property()
  name!: string;

  @Property()
  email!: string;
}
