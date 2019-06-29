create database if not exists abcd_dev;

use abcd_dev;

create table if not exists user (
  userId bigint not null auto_increment,
  firstName varchar(100) not null,
  lastName varchar(100) not null,
  fullName varchar(202) not null,
  email varchar(256) not null,
  password varchar(256) not null,
  verificationCode  varchar(256) not null,
  verified bool default false not null,
  banned bool default false not null,
  role varchar(50) not null,
  organization varchar(50) not null,
  createdAt timestamp not null default CURRENT_TIMESTAMP,
  updatedAt timestamp not null default CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP,
  primary key (userId)
);

/********************************* Team **********************************/

create table if not exists team (
  teamId bigint not null auto_increment,
  ownerId bigint not null,
  name varchar(256) not null,
  about varchar(256) not null,
  createdAt timestamp not null default CURRENT_TIMESTAMP,
  updatedAt timestamp not null default CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP,
  primary key (teamId),
  unique(teamId)
);

create table if not exists team_member (
  userId bigint not null,
  teamId bigint not null,
  status char not null default 'j',  /* j = joined, l = left the channel, r = rejoined, b = blocked */
  lastReceivedMessage bigint,
  lastSeenMessage bigint,
  createdAt timestamp not null default CURRENT_TIMESTAMP,
  updatedAt timestamp not null default CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP,
  primary key (userId, teamId),
  unique(userId, teamId)
);

/*********************************** Chat *********************************/

create table if not exists channel (
  channelId bigint not null auto_increment,
  ownerId bigint not null,
  name varchar(256) not null,
  about varchar(256) not null,
  teamId varchar(256),
  createdAt timestamp not null default CURRENT_TIMESTAMP,
  updatedAt timestamp not null default CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP,
  primary key (channelId),
  unique(channelId)
);

create table if not exists channel_message (
  channelMessageId bigint not null auto_increment,
  channelId bigint not null,
  userId bigint not null,
  content varchar(5000) not null,        /* text message or fileId */
  type char not null default 't',  /* t = text, f = file */
  fileId bigint,
  edited bool default false not null,
  isRemoved bool default false not null,
  createdAt timestamp not null default CURRENT_TIMESTAMP,
  updatedAt timestamp not null default CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP,
  primary key (channelMessageId),
  unique(channelMessageId)
);

create table if not exists channel_member (
  userId bigint not null,
  channelId bigint not null,
  status char not null default 'j',  /* j = joined, l = left the channel, r = rejoined, b = blocked */
  lastReceivedMessage bigint,
  lastSeenMessage bigint,
  createdAt timestamp not null default CURRENT_TIMESTAMP,
  updatedAt timestamp not null default CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP,
  primary key (userId, channelId),
  unique(userId, channelId)
);

create table if not exists channel_file (
  channelFileId varchar(100) not null,
  ownerId bigint not null,
  channelId bigint not null,
  name varchar(256) not null,
  type varchar(50) not null,
  length int not null,
  sha1 varchar(50) not null,
  title varchar(50) not null,
  about varchar(50) not null,
  createdAt timestamp not null default CURRENT_TIMESTAMP,
  updatedAt timestamp not null default CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP,
  primary key (channelFileId),
  unique(channelFileId)
);

/******************************** Community ******************************/

create table if not exists community (
  communityId bigint not null auto_increment,
  ownerId bigint not null,
  name varchar(256) not null,
  about varchar(256) not null,
  createdAt timestamp not null default CURRENT_TIMESTAMP,
  updatedAt timestamp not null default CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP,
  primary key (communityId),
  unique(communityId)
);

create table if not exists community_message (
  communityMessageId bigint not null auto_increment,
  communityId bigint not null,
  userId bigint not null,
  content varchar(5000) not null,
  edited bool default false,
  isRemoved bool default false,
  createdAt timestamp not null default CURRENT_TIMESTAMP,
  updatedAt timestamp not null default CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP,
  primary key (communityMessageId),
  unique(communityMessageId)
);

create table if not exists community_member (
  userId bigint not null,
  communityId bigint not null,
  status char not null default 'j',  /* j = joined, l = left the community, r = rejoined, b = blocked */
  createdAt timestamp not null default CURRENT_TIMESTAMP,
  updatedAt timestamp not null default CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP,
  primary key (userId, communityId),
  unique(userId, communityId)
);

/******************************* File Storage ****************************/

create table if not exists file_storage (
  fileStorageId bigint not null auto_increment,
  userId bigint not null,
  b2FileId varchar(150),
  b2FileName CHAR(36),
  fileName varchar(256) not null,
  extension varchar(10),
  parentDirectory varchar(1500) not null default '/',
  isFile bool default true not null,
  isRemoved bool default false not null,
  contentLength int,
  contentType varchar(50),
  contentSha1 varchar(50),
  fileInfo varchar(500),
  createdAt timestamp not null default CURRENT_TIMESTAMP,
  updatedAt timestamp not null default CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP,
  primary key (fileStorageId),
  unique(fileStorageId, b2FileId, b2FileName)
);

/**************************************** Log ***********************************/

create table if not exists log (
  logId bigint not null auto_increment,
  type varchar(10) not null,
  message varchar(1500) not null,
  stackTrace varchar(1500),
  date timestamp not null default CURRENT_TIMESTAMP,
  primary key (logId)
);


/********************************************************************************

create table if not exists t1 ...

insert into t1
  select * from thepetri_dev.file_storage;

drop table file_storage;

create table if not exists file_storage ...

insert into file_storage
  select * from t1;

drop table t1;

**********************************************************************************/