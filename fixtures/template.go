// Go Example
package main

import (
	"fmt"
	"github.com/user/stringutil"
)

type HooksExecutor struct {
	migrationContext *base.MigrationContext
}

func (this *HooksExecutor) executeHook(hook string, extraVariables ...string) error {
	cmd := exec.Command(hook)
	cmd.Env = this.applyEnvironmentVairables(extraVariables...)

	combinedOutput, err := cmd.CombinedOutput()
	fmt.Fprintln(os.Stderr, string(combinedOutput))
	return log.Error(err)
}
