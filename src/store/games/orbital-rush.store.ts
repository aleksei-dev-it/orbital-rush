import { create } from 'zustand'

export enum OrbitalRushPhase {
	IDLE = 'IDLE',
	COUNTDOWN = 'COUNTDOWN',
	LAUNCH = 'LAUNCH',
	FLYING = 'FLYING',
	FINISHED = 'FINISHED',
}

interface OrbitalRushState {
	phase: OrbitalRushPhase
	isLaunched: boolean
	altitude: number // 0–100
	speed: number

	// game flow
	startGame: () => void
	startFlying: () => void
	finishGame: () => void
	resetGame: () => void

	// state setters
	setPhase: (phase: OrbitalRushPhase) => void
	setAltitude: (value: number) => void
}

export const useOrbitalRushStore = create<OrbitalRushState>((set) => ({
	// =====================
	// STATE
	// =====================
	phase: OrbitalRushPhase.IDLE,
	isLaunched: false,
	altitude: 0,
	speed: 1,

	// =====================
	// GAME FLOW
	// =====================
	startGame: () =>
		set({
			phase: OrbitalRushPhase.LAUNCH,
			isLaunched: true,
			altitude: 0,
			speed: 1,
		}),

	startFlying: () =>
		set({
			phase: OrbitalRushPhase.FLYING,
		}),

	finishGame: () =>
		set({
			phase: OrbitalRushPhase.FINISHED,
			isLaunched: false,
		}),

	resetGame: () =>
		set({
			phase: OrbitalRushPhase.IDLE,
			isLaunched: false,
			altitude: 0,
			speed: 1,
		}),

	// =====================
	// HELPERS
	// =====================
	setPhase: (phase) => set({ phase }),

	setAltitude: (value) =>
		set({
			altitude: Math.min(100, Math.max(0, value)),
		}),
}))
