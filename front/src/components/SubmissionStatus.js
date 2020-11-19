import React from 'react';
import { makeStyles } from '@material-ui/core';

import Tooltip from '@material-ui/core/Tooltip';
import Alert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  loader: {
    marginRight: theme.spacing(2),
    verticalAlign: 'middle',
  },
  alert: {
    paddingTop: 0,
    paddingBottom: 0,
  },
}));

const SubmissionStatus = ({
  submission_count,
  submission_date,
  correction_date,
  passed,
  loader,
}) => {
  const classes = useStyles();

  if (loader) return <CircularProgress size={25} className={classes.loader} />;

  if (correction_date) {
    const correctioDate = new Date(correction_date).toLocaleString();
    if (passed)
      return (
        <Tooltip
          title={`Tests réussis le ${correctioDate}`}
          placement="top"
          arrow
        >
          <Alert severity="success" className={classes.alert}>
            Succès
          </Alert>
        </Tooltip>
      );
    return (
      <Tooltip
        title={`Tests échoués le ${correctioDate}`}
        placement="top"
        arrow
      >
        <Alert severity="warning" className={classes.alert}>
          Echec
        </Alert>
      </Tooltip>
    );
  }

  if (submission_count)
    return (
      <Tooltip
        title={new Date(submission_date).toLocaleString()}
        placement="top"
        arrow
      >
        <Alert severity="info" className={classes.alert}>
          Enregistré
        </Alert>
      </Tooltip>
    );
  return null;
};

export default SubmissionStatus;