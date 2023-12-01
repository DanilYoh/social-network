export const callIfChange = <R, T extends () => Promise<R>>(
  prevValue: string,
  value: string,
  cb: T
) => {
  if (prevValue !== value) return cb();
};
