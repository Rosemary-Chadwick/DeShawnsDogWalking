# DeShawn's Dog Walking

**Add your ERD here**

Table Walker {
id int pk
name varchar
}

Table City {
id int pk
name varchar
}

Table Dog {
id int pk
name varchar
walkerId int [ref: > Walker.id]
}

Table WalkerCity {
id int pk
walkerId int [ref: > Walker.id]
cityId int [ref: > City.id]
}

there is also an erc.dbml file in this project

https://miro.com/app/board/uXjVL1MTB5s=/?share_link_id=864774332659
