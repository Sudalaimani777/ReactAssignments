const Button = ({children, type, isDisabled}) => {
  return (
    <button
      type={type}
      disabled={isDisabled}
      className="inline-flex min-w-28 items-center justify-center rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-500"
    >
      {children}
    </button>
  )
}

export default Button
