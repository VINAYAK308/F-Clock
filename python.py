import time
import os

def pomodoro_timer():
    work_duration = 25 * 60  # 25 minutes in seconds
    break_duration = 5 * 60  # 5 minutes in seconds
    cycles = 4  # Number of Pomodoro cycles

    for cycle in range(cycles):
        # Work session
        print("Pomodoro Cycle", cycle + 1, " - Work for 25 minutes")
        countdown(work_duration)
        os.system('say "Work session finished. Take a break"')  # Voice notification
        # Short break
        print("Take a short break for 5 minutes")
        countdown(break_duration)
        os.system('say "Short break finished. Get back to work"')  # Voice notification

    print("Congratulations! You've completed", cycles, "Pomodoro cycles.")

def countdown(duration):
    while duration:
        mins, secs = divmod(duration, 60)
        timeformat = '{:02d}:{:02d}'.format(mins, secs)
        print(timeformat, end='\r')
        time.sleep(1)
        duration -= 1

if __name__ == "__main__":
    pomodoro_timer()
