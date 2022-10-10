import { MigrationInterface, QueryRunner, Table } from "typeorm";

export default class CreateType1665427475474 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "type",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true
          },
          {
            name: "name",
            type: "varchar(60)"
          },
          {
            name: "focus",
            type: "varchar(60)"
          }
        ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("type");
  }
}