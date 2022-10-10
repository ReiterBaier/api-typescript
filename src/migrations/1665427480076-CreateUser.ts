import { MigrationInterface, QueryRunner, Table } from "typeorm";

export default class CreateUser1665427480076 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "user",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment"
          },
          {
            name: "username",
            type: "varchar(100)"
          },
          {
            name: "password",
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
    await queryRunner.dropTable("user");
  }
}