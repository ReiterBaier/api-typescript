import { MigrationInterface, QueryRunner, Table } from "typeorm";

export default class CreateTask1665427471879 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "task",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment"
          },
          {
            name: "idMainTask",
            type: "int",
            "default": 0
          },
          {
            name: "name",
            type: "varchar(200)"
          },
          {
            name: "description",
            type: "longblob"
          },
          {
            name: "idClient",
            type: "int"
          },
          {
            name: "idPlataform",
            type: "int"
          },
          {
            name: "idType",
            type: "int"
          },
          {
            name: "idUser",
            type: "int"
          },
          {
            name: "idStatus",
            type: "int"
          },
          {
            name: "creationDate",
            type: "timestamp"
          },
          {
            name: "previousStartDate",
            type: "date"
          },
          {
            name: "startDate",
            type: "date"
          },
          {
            name: "conclusionDate",
            type: "timestamp"
          },
          {
            name: "estimateTime",
            type: "numeric(16,6)"
          }
        ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("task");
  }
}