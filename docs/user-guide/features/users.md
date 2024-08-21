---
sidebar_position: 6
---

# Users

In KADAI, a User is an entity that represents a user. A user is used for authentication as well as for specifiyng the owner of a Task. The User entity has attributes such as name, phone number and e-mail. 

A user can belong to one or multiple groups and have permissions assigned. Groups and permissions are used to determine additinal access rights of the user. For example, if "user-1" belongs to the group "group-1", and "group-1" has access to the Workbasket "workbasket-of-group-1", then "user-1" has access to the "workbasket-of-group-1". Same applies to permissions. Users, Groups and permissons are identified via an **AccessId** in KADAI. The AccessId is used for determining access rights through WorkbasketAccessItems. You can read more about it [here](../core-concepts/overview.md#workbasketaccessitem). Additionaly, Users and Groups both have [Roles](../core-concepts/securityAndPermissions.md#security-roles-in-kadai) assigned.

## Operations on Users
You can create, get, update and delete a User via UserService in the Java-API. In the REST-API, you can fetch detailed information about Users via the associated API operations.
A detailed description of the REST-operations on AccessIds, Users and Groups can be found at the follwing links:
 - [AccessIds](https://kadai.mybluemix.net/kadai/docs/rest/rest-api.html#_access_id_resource)
 - [Users & Groups](https://kadai.mybluemix.net/kadai/docs/rest/rest-api.html#_user_resource)

You can set up your Users using LDAP. In this case, you can also use the [UserInfoRefreshJob](jobs.md#userinforefreshjob) to keep the Users up to date with your .ldif file.

## Configuration
You can read more about the configuration of Users [here](../configuration/security.md#users). 
