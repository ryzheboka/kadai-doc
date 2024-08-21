---
sidebar_position: 4
---

# KADAI Jobs

During the usage of KADAI, some functionality has to be executed in the background implicitly. This is accomplished by Jobs that are run by the scheduler. Both, scheduler as well as customizable Jobs, run at a fixed rate that can be specified during KADAI set up. Each time the scheduler is run, it starts all jobs that are due. This way, jobs can be created and run automatically. Jobs can only be started by the scheduler. If the scheduler is run once daily, a job can't be executed more frequently. All job configuration options are explained [here](../configuration/kadaiJobs.md).

You can implement your own Jobs or use Jobs provided by KADAI. The jobs provided by KADAI are listed below.

### TaskPriorityUpdateJob

Updates Task priority for each Task once in a fixed time interval.

### UserInfoRefreshJob

Loads User Info into the User table from the .ldif file once in a fixed time interval.

### TaskCleanupJob

Deletes Tasks comleted longer than a fixed time ago. This Job also runs at a fixed rate.

### HistoryCleanupJob

Deletes HistoryEvents for deleted Tasks. This Job also runs at a fixed rate.
