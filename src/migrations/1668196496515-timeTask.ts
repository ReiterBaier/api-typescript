import { MigrationInterface, QueryRunner, Table } from "typeorm";

export default class CreateTimeTask1668196496515 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "timeTask",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment"
          },
          {
            name: "idTask",
            type: "int"
          },
          {
            name: "time",
            type: "double",
            default: 0
          }
        ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("timeTask");
  }
}