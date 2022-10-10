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
            isPrimary: true
          },
          {
            name: "idMainTask",
            type: "int"
          },
          {
            name: "name",
            type: "varchar(200)"
          },
          {
            name: "description",
            type: "varchar(8000)"
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
            name: "previousDate",
            type: "timestamp"
          },
          {
            name: "startDate",
            type: "timestamp"
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