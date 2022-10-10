import { MigrationInterface, QueryRunner, Table } from "typeorm";

export default class CreateClient1665427285778 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "client",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment"
          },
          {
            name: "document",
            type: "varchar(20)"
          },
          {
            name: "name",
            type: "varchar(100)"
          },
          {
            name: "token",
            type: "varchar(200)",
            default: "0"
          }
        ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("client");
  }
}