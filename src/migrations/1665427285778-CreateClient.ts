import { MigrationInterface, QueryRunner, Table } from "typeorm";

export default class CreateClient1665427285778 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "client",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()"
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
            type: "varchar(200)"
          }
        ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("client");
  }
}