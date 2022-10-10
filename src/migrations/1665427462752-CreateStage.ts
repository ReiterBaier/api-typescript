import { MigrationInterface, QueryRunner, Table } from "typeorm";

export default class CreateStage1665427462752 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "stage",
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
            name: "weight",
            type: "numeric(16,6)"
          }
        ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("stage");
  }
}