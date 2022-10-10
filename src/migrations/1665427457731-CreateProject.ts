import { MigrationInterface, QueryRunner, Table } from "typeorm";

export default class CreatePlataform1665427449549 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "plataform",
        columns: [
          {
            name: "id",
            type: "varchar(36)",
            isPrimary: true
          },
          {
            name: "name",
            type: "varchar(60)"
          }
        ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("plataform");
  }
}