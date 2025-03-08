const fetcher = async (url: string) => {
    const response = await fetch(url, {
      headers: {
        Authorization: '2BsWyF6hhMIrPOCT2bVyi4DaBP3mhfoKe2toaTjMvmsFSuOIPjmCFwGW',
      },
    });
  
    if (!response.ok) {
      throw new Error(`Failed to fetch data from ${url}`);
    }

    return response.json();
  };
  
  export default fetcher;