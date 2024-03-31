const getStoredJobApp = () => {
  const storedJobApp = localStorage.getItem('job-app');
  if(storedJobApp) {
    return JSON.parse(storedJobApp);
  }
  return [];
}


const saveJobApp = (id) => { 
  const storedJobApp = getStoredJobApp();
  const exist = storedJobApp.find(jobId => jobId === id);
  if(!exist) {
    storedJobApp.push(id);
    localStorage.setItem('job-app', JSON.stringify(storedJobApp));
  }
}

const removeJob = () => {
  const remove = localStorage.removeItem('job-app');
  return remove;
}

export { getStoredJobApp, saveJobApp, removeJob };