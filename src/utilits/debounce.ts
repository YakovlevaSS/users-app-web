/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLayoutEffect, useRef } from 'react'

export function useLatest(value: any) {
	const latestValue = useRef(value)

	useLayoutEffect(() => {
		latestValue.current = value
	})

	return latestValue
}